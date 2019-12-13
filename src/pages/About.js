import React, {Component} from 'react'

class About extends Component{
	render(){
		return (
			<div>
				<h2>เว็บนี้คืออะไร?</h2>
				<ul>
					<li>เว็บนี้สร้างขึ้นด้วย <a href="https://reactjs.org/">ReactJS</a></li>
					<li>เชื่อมต่อ API ชำระเงินของ <a href="https://omise.co">Omise</a> ด้วย <a href="https://nodejs.org/">NodeJS</a> x <a href="https://expressjs.com/">ExpressJS</a></li>
					<li>Deploy ที่ <a href="https://zeit.com">Zeit.com</a></li>
					<li>ผ่าน <a href="https://github.com">Github</a> แบบอัติโนมัติ</li>
					<li>แจ้งเตือนทาง <a href="https://notify-bot.line.me/th/">Line Notify</a> และอีเมล์ <a href="https://nodemailer.com/">Node Mailer</a></li>
					<li>รายการสินค้าตัวอย่าง จาก <a href="https://www.slyq-clothing.com/">slyq-clothing</a></li>
				</ul>
				<h4>จ้างงาน</h4>
				<div>
					ติดต่อ Line ID: joystats<br/>
					อีเมล์ joystats@yahoo.com
				</div>
			</div>
		)
	}
}

export default About;