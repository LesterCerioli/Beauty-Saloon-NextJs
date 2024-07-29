import { useEffect, useRef, useState } from "react";

export function LazyLoad({children} : any){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(()=> {
        const currentRef = ref.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.disconnect();
                }
            },{
                threshold: 0.1,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
              observer.unobserve(currentRef);
            }
          };
    }, [ref]);

    return (
        <div ref={ref}>{isVisible ? children : null}</div>
    );
}