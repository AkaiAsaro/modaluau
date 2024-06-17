export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelector(selector);
export function fadeIn(element) {
    if(!element) return;
    element.style.display = 'block';
    settimeout(() =>{
        element.style.opacity = '1'
    }, 2000);

}

export function fadeOut(element) {
    if(!element) return;
    element.style.display = 'none';
    settimeout(() =>{
        element.style.opacity = '0'
    }, 3000);

}