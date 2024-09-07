import React from 'react'
import Layout from '../components/Layout';



const Products = () => {

  const products = [
    { id: 1, name: "basic react native", price: 7500, imageUrl: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.15752-9/457515419_466019079759570_4794481852196949195_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=NIH56ftdnP0Q7kNvgGkk1aX&_nc_ht=scontent.fbkk9-2.fna&oh=03_Q7cD1QGeGvgswyPYwdbnqY4oiYpZ2umSEtPf-ZihwKaJTqrdMA&oe=6703741B" },
    { id: 2, name: "Cross Platfrom with Fluetter", price: 6500, imageUrl: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/457439713_1056774622906304_3370642406202038301_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=bLdatLEdcMoQ7kNvgHk6IyU&_nc_ht=scontent.fbkk12-2.fna&oh=03_Q7cD1QG-NBWI5ImvtxXxxOZ7jhMsY5hy-vZhOCJt7cesKyARAg&oe=67038E1E" },
    { id: 3, name: "Ui design with Figma", price: 5000, imageUrl: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.15752-9/458408963_1228593765151958_3806946804551374025_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EbXI6amyea4Q7kNvgFOBs7y&_nc_ht=scontent.fbkk9-2.fna&_nc_gid=APqLiJsPHpxs8-JDR_PEDwc&oh=03_Q7cD1QGjWMASr5qAJVBmF7kDihstFRrjufa_DE1yNhCLPdeSPw&oe=67036C26" },
    { id: 4, name: "power Bi Dashboard", price: 5500, imageUrl: "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.15752-9/457404464_3645147969073180_2817047069808753143_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=6oqYrpzSsKQQ7kNvgETiboR&_nc_ht=scontent.fbkk8-3.fna&oh=03_Q7cD1QEyMvUU6akthUCn67d3Q0XjN1oKmEQ-pagq7MU74_VBRw&oe=67037B31" },
  ];
  

  return (
    <Layout>
  

    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>

    </Layout>
  )
}

const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          สินค้าใหม่
        </div>
        <button className="absolute top-2 right-2 text-blue-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12l5 5L20 7"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-gray-500 font-semibold text-lg mb-1">{name}</h3>
        <p className="text-gray-300 mb-4">฿{price}</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded w-full">
          ซื้อ (ไม่ได้นะขอโทษด้วย)
        </button>
      </div>
    </div>
  );
};

export default Products