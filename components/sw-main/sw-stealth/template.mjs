const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-stealth/shadow.css">
    <div class="page-wrapper">
        <div class="sky">
            <div class="component-wrapper">
                <aside>
                    <p>Currently in stealth development...</p>
                    <br>
                    <a><button></button></a>
                </aside>
                <div class="sun"></div>
                <div class="background-grid">
                    <div class="background one"><img class="" src="components/sw-main/sw-stealth/background-1.svg" /></div>
                    <div class="background two"><img class="" src="components/sw-main/sw-stealth/background-2.svg" /></div>
                    <div class="background three"><img class="" src="components/sw-main/sw-stealth/background-3.svg" /></div>
                    <div class="background four"><img class="" src="components/sw-main/sw-stealth/background-4.svg" /></div>
                </div>
                <div class="svg-image limit">
                    <div class="weld-wrapper">
                    <div class="weld-container">
                    </div>
                    <div class="weld-container">
                    </div>
                    </div>
                </div>
                <img class="svg-image" src="components/sw-main/sw-stealth/crane.svg" />
                <div class="svg-components">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="768px" viewBox="0 0 1024 768" enable-background="new 0 0 1024 768" xml:space="preserve">
                                                <path id="trolly" class="trolly-movement" d="M661.25,155.5l-6.632-0.507l-0.533,0.694l-1.461,1.697l-4.377-0.313l-2.711-0.194l-1.037,0.437l-1.51-0.078l0.26-0.486
                                                    v-1.835l-5.513-0.638l-0.237,0.509v1.363H632L631.75,151l1.875-0.931l-1.723-2.517l-2.777,0.143l-1-1.57l-3.375,2.819L624,148.25
                                                    l-2.301,0.641l-0.048,0.569l-0.013,0.247l-0.061,1.159l-0.078,1.509l0.034,1.355l0.017,0.684l0.042,1.686l0.025,1.003l0.007,0.28
                                                    l-1.744,1.234l-1.108,1.246l-0.085,0.997l12.838,0.769l0.1,0.995l1.25,0.125l0.25,3.625l1.5,0.25l0.75-1l2.957-0.71l0.513,0.298
                                                    c2.117,1.904,4.03-0.338,4.03-0.338h0.224h0.501h6.15l0.069,0.191l-0.026,1.12l0.499,0.063h0.833v1.889l1.375-0.014v-1.25
                                                    l4.875-2.75l2.75-0.25L661.25,155.5z M642.468,158.21l2.032,0.106v1.011l-2.25-0.709L642.468,158.21z M649.625,163h-6.875v-0.789
                                                    l7.114,0.335L649.625,163"/>
                                                </svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="768px" viewBox="0 0 1024 768" enable-background="new 0 0 1024 768" xml:space="preserve">
                                                    
                                                    <path class="cable" d="m654.344,650 V 165" />
                                                    <path class="cable" d="m648.344,650 V 165" />
                                                    <path class="cable" d="m644.344,650 V 165" />
                                                    <path class="cable" d="m640.344,650 V 165" />
                                                    <path class="hook" d="m654.344,220.156c-0.101,-0.106 -0.208,-0.19 -0.318,-0.266l-0.498,-0.247c-1.189,-0.395 -2.701,0.225 -3.881,-0.415c-0.154,-1.684 0.632,-4.128 -0.424,-5.575c-0.012,-0.016 -0.03,-0.026 -0.043,-0.042l-0.491,-0.437c-1.197,-0.764 -3.249,-0.454 -3.871,0.761l-0.385,4.652c-0.125,0.326 -0.408,0.527 -1.059,0.565c-0.696,0.041 -1.667,-0.156 -2.475,-0.024l-0.496,0.142c-0.186,0.08 -0.361,0.179 -0.504,0.332c-0.678,0.726 -0.501,2.745 -0.401,3.648c0.12,1.083 0.376,1.301 1.219,2.03c0.876,0.758 1.799,1.431 2.754,2.083c1.098,0.75 1.737,0.723 3.009,1.03c0.116,1.27 -2.036,0.756 -1.731,2.731c0.142,0.918 0.971,2.103 1.94,2.33l0,0c0.998,0.155 1.81,-0.965 1.81,-0.965c0.441,-0.584 0.663,-1.285 0.225,-1.714c-0.583,-0.572 -1.747,2.034 -2.739,0.225c1.036,-0.754 0.907,-1.087 1.39,-2.124c1.099,-2.364 5.335,-2.137 7.027,-4.099c0.792,-0.916 0.794,-3.727 -0.058,-4.621z"/>
                                                </svg>
                    <svg class="material" id="material-group" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="768px" viewBox="0 0 1024 768" enable-background="new 0 0 1024 768" xml:space="preserve">
                                                    <path fill-opacity="null" stroke-width="0.4" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m648.984268,232.200277l23.640917,19.5284" id="svg_6"/>
                                                    <path  fill-opacity="null" stroke-width="0.4" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m648.586944,232.497402l32.580756,19.5284" id="svg_4"/>
                                                    <path  fill-opacity="null" stroke-width="0.4" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m648.586944,232.93624l-31.586942,19.089562" id="svg_7"/>
                                                    <path  fill-opacity="null" stroke-width="0.4" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m648.806102,232.716821l-24.137061,19.089562" id="svg_8"/>
                                                    <path stroke="null" fill="null" fill-opacity="null" stroke-width="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m647.792297,233.254576c0,-0.727359 0.533432,-1.316526 1.191982,-1.316526c0.658551,0 1.191982,0.589167 1.191982,1.316526c0,0.727359 -0.533432,1.316526 -1.191982,1.316526c-0.658551,0 -1.191982,-0.589167 -1.191982,-1.316526z" id="svg_13"/>
                                                    <path stroke="null" fill="null" fill-opacity="null" stroke-width="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m648.586955,232.607105c0,-0.181843 0.044449,-0.329135 0.099337,-0.329135c0.054876,0 0.099337,0.147292 0.099337,0.329135c0,0.181843 -0.044449,0.329135 -0.099337,0.329135c-0.054876,0 -0.099337,-0.147292 -0.099337,-0.329135z" id="svg_14"/>
                                                    <path   fill-opacity="null" stroke-width="0.4" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="null" d="m617.198193,252.025815l63.969496,0l0,21.283765l-63.969496,0l0,-21.283765z" id="svg_16"/>
                                                </svg>
                </div>
                <div class="svg-image limit">
                    <div class="light-wrapper">
                    <div class="light-bar">
                        <div class="light red"></div>
                        <div class="light red"></div>
                        <div class="light red"></div>
                        <div class="light red"></div>
                        <div class="light red"></div>
                        <div class="light red"></div>
                        <div class="light red"></div>
                        <div class="light red"></div>
                    </div>
                    <div class="light red top"></div>
                    </div>
                </div>
                <div class="svg-image limit">
                    <div class="spark-wrapper">
                    <div class="spark-container">
                        <div class="spark first"></div>
                    </div>
                    <div class="spark-container">
                        <div class="spark second"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ground"></div>
    </div>
`;

export default template;