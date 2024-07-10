# Use uma imagem oficial do Node.js como imagem base
FROM node:18-alpine AS builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte da aplicação para o contêiner
COPY . .

# Construa a aplicação Next.js
RUN npm run build

# Use uma imagem oficial do Node.js como imagem base para o ambiente de produção
FROM node:18-alpine AS runner

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários do estágio de build para o estágio de produção
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Exponha a porta que a aplicação Next.js irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação Next.js
CMD ["npm", "start"]
