'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import "./ProductBlock.css"
import { urlFor } from "../../../src/sanity/image";
export const dynamic = "force-dynamic";
export function ProductBlock({ products }) {
    console.log(products)
        return (
            <div className="products-wrapper">
              {products.map((product)=> (
                <motion.div className="product-wrapper" key={product._id}
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                >
                  <div className="product-box">
                    <img 
                    className="product-box__img"
                    src={product.image?.asset ? urlFor(product.image.asset._ref).url() : '/placeholder.png'}
                    alt={product.image?.caption || ''}
                    loading="lazy"
                  />
                    <h3 className="product-box__title">{product.title}</h3>
                    <p className="product-box__category">{product.description}</p>
                    <Link href={`products/${product.slug.current}`}>
                      Узнать больше
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
        )
}
