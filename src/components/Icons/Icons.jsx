const ExpenseIcon = ({ width = '36px', height = '36px', color = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 384 512"><path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z" fill={color}/></svg>
  )
}

const RefundIcon = ({ width = '36px', height = '36px', color = 'currentColor' }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33.7875 30.5508">
      <g>
        <rect height="30.5508" opacity="0" width="33.7875" x="0" y="0" />
        <path d="M18.177 30.5273C26.5324 30.5273 33.4348 23.6133 33.4348 15.2695C33.4348 6.91406 26.5324 0 18.177 0C9.8215 0 2.91916 6.90234 2.91916 15.2578L5.09885 15.2578C5.09885 8.00391 10.9231 2.20312 18.177 2.20312C25.4192 2.20312 31.2551 8.01562 31.2551 15.2695C31.2551 22.5117 25.4192 28.3711 18.177 28.3477C13.6887 28.3359 9.76291 26.0859 7.41916 22.6523C7.03244 22.125 6.41135 21.9609 5.884 22.2891C5.36838 22.5938 5.21603 23.2969 5.64963 23.8711C8.49728 27.8203 13.009 30.5273 18.177 30.5273ZM0.962126 12.4336C0.00118888 12.4336-0.268342 13.0898 0.282439 13.8516L3.61056 18.5859C4.05588 19.2305 4.70041 19.2188 5.134 18.5859L8.46213 13.8398C8.98947 13.0898 8.73166 12.4336 7.78244 12.4336Z" fill={color} />
        <path d="M18.177 23.8242C18.552 23.8242 18.8332 23.5664 18.8332 23.1797L18.8332 22.0781C21.2121 21.8672 22.9934 20.4844 22.9934 18.2812C22.9934 16.3008 21.6926 15.1055 19.1028 14.6016L18.8332 14.5547L18.8332 10.125C20.0403 10.3008 20.9074 11.0156 21.177 12.0938C21.3176 12.5039 21.5637 12.7617 21.9973 12.7617C22.4543 12.7617 22.7707 12.4336 22.7707 11.9766C22.7707 11.8242 22.7356 11.6836 22.7121 11.5312C22.3254 9.92578 20.7785 8.78906 18.8332 8.58984L18.8332 7.54688C18.8332 7.16016 18.552 6.90234 18.177 6.90234C17.8137 6.90234 17.5442 7.16016 17.5442 7.54688L17.5442 8.58984C15.2824 8.82422 13.6301 10.2422 13.6301 12.2461C13.6301 14.0977 14.9074 15.2227 17.4035 15.8086L17.5442 15.8438L17.5442 20.5547C16.0793 20.3789 15.1418 19.5586 14.9192 18.4219C14.7785 17.9766 14.509 17.7422 14.1106 17.7422C13.6535 17.7422 13.3371 18.0703 13.3371 18.5391C13.3371 18.6914 13.3723 18.832 13.3957 18.9844C13.8059 20.7305 15.4817 21.8672 17.5442 22.0547L17.5442 23.1797C17.5442 23.5664 17.8137 23.8242 18.177 23.8242ZM17.5442 14.2266L17.4387 14.1914C15.9621 13.7812 15.259 13.1602 15.259 12.1758C15.259 11.1445 16.1731 10.3242 17.5442 10.125ZM18.8332 16.1719L19.1613 16.2539C20.7551 16.6758 21.3645 17.3203 21.3645 18.3633C21.3645 19.5352 20.4738 20.4023 18.8332 20.5547Z" fill={color} />
      </g>
    </svg>
  )
}

const ReimbursementIcon = ({ width = '36px', height = '36px', color = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 640 512"><path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z " fill={color}/></svg>
  )
}

export { RefundIcon, ExpenseIcon, ReimbursementIcon }