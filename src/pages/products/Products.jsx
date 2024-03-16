import { Col, Row } from 'antd'
import React from 'react'
import ProductCard from '../../components/card/ProductCard'

const Products = () => {
    return (
        <div>
            <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} >
                    <ProductCard />
                </Col>


            </Row>
        </div>
    )
}

export default Products
