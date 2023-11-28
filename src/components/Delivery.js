import React from "react"

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery APP
      </h3>
      <div className="w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="two phones"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            possimus, dicta quos harum corporis natus, rem ab eveniet sint
            ratione voluptates repudiandae fugit quam amet debitis consequatur
            nesciunt beatae eligendi deleniti qui voluptatum? Iusto sapiente
            distinctio unde nostrum voluptates magnam nemo provident voluptate.
            Facere architecto reprehenderit dolore. Laborum magni corrupti
            molestias sint et aut amet deleniti deserunt ipsum qui, repellendus
            perspiciatis molestiae magnam est eos quam natus ea rerum
            laudantium. Minus rem veniam reiciendis, accusantium, accusamus
            adipisci iste nobis facilis quidem, amet vitae? Tenetur aliquid
            laborum odio dolor nostrum impedit saepe dolorem omnis? Voluptatum
            repudiandae aperiam veniam debitis perferendis? Officiis!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
