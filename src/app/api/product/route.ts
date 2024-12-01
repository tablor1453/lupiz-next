import { NextRequest, NextResponse } from "next/server"

const data = [
    {
        id: 1,
        title: "Sepatu",
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd603b51-0a9c-4ed1-9023-6993c077f81e/AIR+FORCE+1+%2707.png"
    },
    {
        id: 2,
        title: "Sepatu Banget",
        price: 200000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png"
    },
    {
        id: 3,
        title: "Air Jordan 1 Low OG 'Wolf Grey'",
        price: 200000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3c26fa5a-157b-4174-9679-17258d767047/AIR+JORDAN+1+RETRO+LOW+OG.png"
    },
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if(id) {
        const detailProduct = data.find((item) => item.id === Number(id));

        if(detailProduct) {
            return NextResponse.json({ 
                status: 200,
                message: "Success",
                data: detailProduct
            });
        }
        
        return NextResponse.json({ 
            status: 404,
            message: "Not found",
            data: {}
        });
    }
    
    return NextResponse.json({ status: 200, message: "Success", data });
}