import Image from "next/image"
export default function Hero() {

    const profile = [
        {
            Img : '/showcase.png',
            title : 'Front-End developer',
            name : 'Bamgboye Oluwashinaayomi'
        }
    ]

    return(
       
        <main>

         {
            profile.map((item, index) => (
                <div key={index} 
                >
                <div 
                className=" bg-orange-700"
                
                >
                    
                <div>
                    <Image
                      src={item.Img}  
                      height={400}
                      width={400}
                    />
                    </div>
                    <div className="text-2xl        "><p>{item.name}</p></div>
                    <div>{item.title} </ div>
                </div>
                </div>
                    ))
                }
         
        </main>
    )
}