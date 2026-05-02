import Link from 'next/link'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full grid grid-cols-2 py-20 px-10 bg-black text-white border-t border-white/10"
    >
  
        <div>Shina.</div>
       <div className=" grid grid-cols-3">
         <div> <Link href="https://github.com/ShinzDev/">Github</Link> </div>
         <div> <Link href="https://x.com/iamvscode">Linkedin </Link> </div>
         <div> <Link href="https://x.com/iamvscode">X</Link> </div>
  
       </div>
   
    </section>
  );
}
