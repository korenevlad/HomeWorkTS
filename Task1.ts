type TypeParams = {
    price: number,
    discount: number,
    isInstallment: boolean,
    months?: number
}

const totalPrice = (params: TypeParams): number => {
    const defaultPrice = params.price * (1 - params.discount / 100)
    if(params.isInstallment && params.months){
        return defaultPrice / params.months
    }
    return defaultPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250