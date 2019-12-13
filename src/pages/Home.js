import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component{
	render(){
		return (
			<div>
				<h2>วิธีทำรายการ</h2>
				<div>
					<a className="a_title">การชำระเงินผ่านบัตรเครดิตและอินเตอร์เน็ตแบ็งค์กิ้ง</a>
					<ol>
						<li>ไปที่หน้า Products</li>
						<li>เลือกสินค้าจากรายการตัวอย่าง</li>
						<li>ไปที่หน้า Cart</li>
						<li>จัดการจำนวนสินค้า</li>
						<li>กดปุ่ม Pay</li>
						<li>เลือกวิธีชำระเงิน</li>
						<li>
							หากเลือกชำระผ่านบัตรเครดิต ให้ใส่ข้อมูลทดสอบดังนี้
							<ul>
								<li>Card number: 5454-5454-545454-5454</li>
								<li>Name on card: Test</li>
								<li>Expired date: 12/21</li>
								<li>Security code: 123</li>
							</ul>
						</li>
						<li>
							หากเลือกชำระผ่านธนาคาร (Internet Banking)
							<ul>
								<li>เลือกธนาคาร</li>
								<li>กดปุ่ม Success</li>
								<li>ทำไมต้องกดปุ่ม Success? เพราะว่านี่คือการทดสอบการโอนเงิน จึงไม่มีการกรอกข้อมูลจริง โดยเราสมมุติว่าลูกค้าชำระเงินแล้ว</li>
								<li>แต่หากใช้งานจริง จะมีหน้าให้ลูกค้ากรอกข้อมูลธนาคาร เพื่อชำระเงิน</li>
							</ul>
						</li>
						<li>ระบบจะแจ้งเตือนผ่าน LINE และ Email เมื่อมีคำสั่งซื้อและการชำระเงิน</li>
					</ol>
				</div>
				<h2>ตัวอย่างการทำรายการ</h2>
				<div>
					<a className="a_title">1. รูปตัวอย่างการทำรายการผ่านบัตรเครดิต</a>
					<ol>
						<li>
							add cart แล้วกด Pay
							<br/>
							<img src="./images/1.jpg" alt="" />
						</li>
						<li>
							กรอกข้อมูลบัตรสำหรับทดสอบ
							<br/>
							<img src="./images/2.jpg" alt=""/>
						</li>
						<li>
							แจ้งเตือนผ่าน Line Notify
							<br/>
							<img src="./images/3.jpg" alt=""/>
						</li>
						<li>
							ดูรายละเอียดการชำระเงินใน Dash board สำหรับแอดมิน
							<br/>
							<img src="./images/11.jpg" alt=""/>
						</li>
					</ol>
				</div>
				
				
				<div>
					<a className="a_title">2. รูปตัวอย่างการทำรายการผ่านอินเตอร์เน็ตแบ็งค์กิ้ง</a>
					<ol>
						<li>
							add cart แล้วกด Pay
							<br/>
							<img src="./images/4.jpg" alt=""/>
						</li>
						<li>
							กดไปยัง Internet Banking
							<br/>
							<img src="./images/5.jpg" alt=""/>
						</li>
						<li>
							เลือกธนาคารที่ต้องการ
							<br/>
							<img src="./images/6.jpg" alt=""/>
						</li>
						<li>
							แจ้งเตือนผ่าน Line Notify
							<br/>
							<img src="./images/7.jpg" alt=""/>
						</li>
						<li>
							เลือก Success (หากต้องการสมมุติว่าลูกค้าทำรายการสำเร็จ)
							<br/>
							<img src="./images/8.jpg" alt=""/>
						</li>
						<li>
							แจ้งเตือนผ่าน Line Notify
							<br/>
							<img src="./images/9.jpg" alt=""/>
						</li>
						<li>
							ทำรายการสำเร็จ
							<br/>
							<img src="./images/10.jpg" alt=""/>
						</li>
						<li>
							ดูรายละเอียดการชำระเงินใน Dash board สำหรับแอดมิน
							<br/>
							<img src="./images/12.jpg" alt=""/>
						</li>
					</ol>
				</div>
				
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		grade: state.create.grade,
		message: state.create.message
	}
}

function mapDispatchToProps(dispatch){
	return {
		addGrade:()=>{
			dispatch({type: "ADD"})
		},
		delGrade:()=>{
			dispatch({type: "DEL"})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)