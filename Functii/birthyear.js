const birthyear=[
    1990,
    2010,
    2006,
    1987,
    2015,
    1995
]

const currentYear=new Date().getFullYear();
const agesOver18=birthyear
    .map(year=>currentYear-year).filter(age=>age>=18);

console.log(agesOver18);