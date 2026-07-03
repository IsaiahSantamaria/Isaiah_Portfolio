import { useEffect} from 'react';
import { animate, svg, stagger} from 'animejs'
import './Name.css'
/**
 * animnation for intro
 * @returns 
 */

const Name = () => {

    useEffect(()=> {
        animate(svg.createDrawable('.line'), {
            draw: ['1 1', '0 1'],
            ease: 'inOutQuad',
            duration: 1000,
            delay: stagger(400),
            loop: false
        });
    }, []);
    return(
        <div className="docs-demo-html">
          <svg viewBox="0 0 404 70">
            <g id="intro-text" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <text
                    className="line Name"
                    x="0"
                    y="60">
                    Hello,
                </text>
                <text
                    className="line Name"
                    x="0"
                    y="60">
                    Hello, it's
                </text>
            </g>
            <g  id="name-text" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <text
                    className="line Name"
                    x="240"
                    y="60">
                    Isaiah
                </text>
            </g>
          </svg>
        </div>




        

    )
}

export default Name;