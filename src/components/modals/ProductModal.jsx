import { Modal } from 'antd'
import React from 'react'

const ProductModal = ({ isModalOpen, handleOk, handleCancel }) => {
    return (
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default ProductModal
