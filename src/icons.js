/*
Custom icons
*/

import {html} from 'lit'

export const asteriskIcon = html`<svg
  height="24"
  width="24"
  viewBox="0 0 24 24"
>
  <path
    fill="#000000"
    d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z"
  />
</svg>`
export const crossIcon = html`<svg height="24" width="24" viewBox="0 0 24 24">
  <path fill="#000000" d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z" />
</svg>`
export const ringsIcon = html`<svg height="24" width="24" viewBox="0 0 24 24">
  <path
    d="m8.748 6.4766c-3.0431 1e-6 -5.5234 2.4804-5.5234 5.5234 0 3.0431 2.4804 5.5234 5.5234 5.5234 0.93172 0 1.8089-0.23453 2.5801-0.64453-0.36367-0.29425-0.69179-0.62746-0.98242-0.99414-0.49253 0.2017-1.0307 0.31641-1.5977 0.31641-2.3282 0-4.2012-1.873-4.2012-4.2012 0-2.3282 1.873-4.2012 4.2012-4.2012 2.3282 0 4.2012 1.873 4.2012 4.2012 0 0.72003-0.19536 1.3855-0.51172 1.9766 0.26276 0.3773 0.60147 0.69303 0.99219 0.9375 0.53009-0.84757 0.8418-1.8439 0.8418-2.9141 0-3.0431-2.4804-5.5234-5.5234-5.5234zm6.5098 0c-0.93172 1e-7 -1.8089 0.23453-2.5801 0.64453 0.36367 0.29425 0.69179 0.62746 0.98242 0.99414 0.49253-0.2017 1.0307-0.31641 1.5977-0.31641 2.3282 2e-7 4.2012 1.873 4.2012 4.2012 0 2.3282-1.873 4.2012-4.2012 4.2012-2.3282 0-4.2012-1.873-4.2012-4.2012 0-0.72003 0.19536-1.3855 0.51172-1.9766-0.26276-0.3773-0.60147-0.69303-0.99219-0.9375-0.53009 0.84757-0.8418 1.8439-0.8418 2.9141 2e-7 3.0431 2.4804 5.5234 5.5234 5.5234 3.0431-2e-6 5.5234-2.4804 5.5234-5.5234 0-3.0431-2.4804-5.5234-5.5234-5.5234z"
  ></path>
</svg>`
export const closeIcon = html`<svg height="24" width="24" viewBox="0 0 24 24">
  <path
    fill="#000000"
    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  />
</svg>`
export const chevronLeftIcon = html`<svg
  height="24"
  width="24"
  viewBox="0 0 24 24"
>
  <path
    fill="#000000"
    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  />
</svg>`
export const chevronRightIcon = html`<svg
  height="24"
  width="24"
  viewBox="0 0 24 24"
>
  <path
    fill="#000000"
    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  />
</svg>`
export const fileIcon = html`<svg height="24" width="24" viewBox="0 0 24 24">
  <path
    fill="#000000"
    d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
  />
</svg>`
export const filePdfIcon = html`<svg height="24" width="24" viewBox="0 0 24 24">
  <path
    fill="#000000"
    d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M10.1,11.4C10.08,11.44 9.81,13.16 8,16.09C8,16.09 4.5,17.91 5.33,19.27C6,20.35 7.65,19.23 9.07,16.59C9.07,16.59 10.89,15.95 13.31,15.77C13.31,15.77 17.17,17.5 17.7,15.66C18.22,13.8 14.64,14.22 14,14.41C14,14.41 12,13.06 11.5,11.2C11.5,11.2 12.64,7.25 10.89,7.3C9.14,7.35 9.8,10.43 10.1,11.4M10.91,12.44C10.94,12.45 11.38,13.65 12.8,14.9C12.8,14.9 10.47,15.36 9.41,15.8C9.41,15.8 10.41,14.07 10.91,12.44M14.84,15.16C15.42,15 17.17,15.31 17.1,15.64C17.04,15.97 14.84,15.16 14.84,15.16M7.77,17C7.24,18.24 6.33,19 6.1,19C5.87,19 6.8,17.4 7.77,17M10.91,10.07C10.91,10 10.55,7.87 10.91,7.92C11.45,8 10.91,10 10.91,10.07Z"
  />
</svg>`

export function renderIcon(path, color = '#999999') {
  return html`<i
    ><svg height="24" width="24" viewBox="0 0 24 24">
      <path fill="${color}" d="${path}" /></svg
  ></i>`
}

export function renderIconSvg(path, color = '#999999') {
  return html`<svg height="24" width="24" viewBox="0 0 24 24">
    <path fill="${color}" d="${path}" />
  </svg>`
}

export function iconDataUrl(path, color = '#999999') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24'><path fill='${color}' d='${path}' /></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
