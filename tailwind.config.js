const percentageScale = {
  '1/100': '1%',
  '2/100': '2%',
  '3/100': '3%',
  '4/100': '4%',
  '5/100': '5%',
  '6/100': '6%',
  '7/100': '7%',
  '8/100': '8%',
  '9/100': '9%',
  '10/100': '10%',
  '11/100': '11%',
  '12/100': '12%',
  '13/100': '13%',
  '14/100': '14%',
  '15/100': '15%',
  '16/100': '16%',
  '17/100': '17%',
  '18/100': '18%',
  '19/100': '19%',
  '20/100': '20%',
  '21/100': '21%',
  '22/100': '22%',
  '23/100': '23%',
  '24/100': '24%',
  '25/100': '25%',
  '26/100': '26%',
  '27/100': '27%',
  '28/100': '28%',
  '29/100': '29%',
  '30/100': '30%',
  '31/100': '31%',
  '32/100': '32%',
  '33/100': '33%',
  '34/100': '34%',
  '35/100': '35%',
  '36/100': '36%',
  '37/100': '37%',
  '38/100': '38%',
  '39/100': '39%',
  '40/100': '40%',
  '41/100': '41%',
  '42/100': '42%',
  '43/100': '43%',
  '44/100': '44%',
  '45/100': '45%',
  '46/100': '46%',
  '47/100': '47%',
  '48/100': '48%',
  '49/100': '49%',
  '50/100': '50%',
  '51/100': '51%',
  '52/100': '52%',
  '53/100': '53%',
  '54/100': '54%',
  '55/100': '55%',
  '56/100': '56%',
  '57/100': '57%',
  '58/100': '58%',
  '59/100': '59%',
  '60/100': '60%',
  '61/100': '61%',
  '62/100': '62%',
  '63/100': '63%',
  '64/100': '64%',
  '65/100': '65%',
  '66/100': '66%',
  '67/100': '67%',
  '68/100': '68%',
  '69/100': '69%',
  '70/100': '70%',
  '71/100': '71%',
  '72/100': '72%',
  '73/100': '73%',
  '74/100': '74%',
  '75/100': '75%',
  '76/100': '76%',
  '77/100': '77%',
  '78/100': '78%',
  '79/100': '79%',
  '80/100': '80%',
  '81/100': '81%',
  '82/100': '82%',
  '83/100': '83%',
  '84/100': '84%',
  '85/100': '85%',
  '86/100': '86%',
  '87/100': '87%',
  '88/100': '88%',
  '89/100': '89%',
  '90/100': '90%',
  '91/100': '91%',
  '92/100': '92%',
  '93/100': '93%',
  '94/100': '94%',
  '95/100': '95%',
  '96/100': '96%',
  '97/100': '97%',
  '98/100': '98%',
  '99/100': '99%',
  '100/100': '100%',
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        xxl: '1920px',
        xxxl: '2560px',
        xxxxl: '3840px',
      },
      width: {
        '1/2-4': 'calc((100% - 1rem)/2)',
        '1/2-8': 'calc((100% - 2rem)/2)',
        '1/3-6': 'calc((100% - 1.5rem)/3)',
        '1/3-12': 'calc((100% - 3rem)/3)',
        '1/4-8': 'calc((100% - 2rem)/4)',
        '1/4-16': 'calc((100% - 4rem)/4)',
        '28': '7rem',
        ...percentageScale,
      },
      minWidth: {
        ...percentageScale,
      },
      maxWidth: {
        ...percentageScale,
      },
      height: {
        '28': '7rem',
        '52': '13rem',
      },
      spacing: {
        '14': '3.5rem',
      },
      inset: {
        '-12': '-3rem',
        '-10': '-2.5rem',
        '-8': '-2rem',
        '-6': '-1.5rem',
        '-5': '-1.25rem',
        '-4': '-1rem',
        '-3': '-0.75rem',
        '-2': '-0.5rem',
        '-1': '-0.25rem',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
      },
      borderRadius: {
        xl: '0.625rem',
        '2xl': '0.75rem',
        '3xl': '0.875rem',
        '4xl': '1rem',
        '5xl': '1.5rem',
        '6xl': '2rem',
      },
      opacity: {
        '55': '0.55',
        '60': '0.60',
        '65': '0.65',
        '70': '0.70',
        '80': '0.80',
        '85': '0.85',
        '90': '0.90',
      },
    },
  },
  variants: {},
  plugins: [],
}
