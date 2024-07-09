import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import Layout from "../components/Layout"
import { plainBelgain } from "../assets"

// import "./routes.css"
const Checkout = () => {
	return (
		<Layout>
			<div className='flex items-center gap-x-2 text-black/70 md:px-8 lg:px-32'>
				<span className='font-bold'>Shop All</span> {">"}
				<span>Plain Belgain</span> {">"}
				<span>Cart</span>
			</div>
			<div className='flex flex-col items-center md:flex-row md:gap-x-20 lg:gap-x-40 md:px-8 lg:px-32 py-16'>
				<div className='border-2 border-black/0 space-y-5'>
					<h2 className='text-4xl font-bold'>Checkout</h2>
					<div className=''>
						<div className='bg-pri rounded-md flex items-center justify-between px-4 py-6 font-medium'>
							<span className=''>Product</span>
							<span className=''>Quantity</span>
						</div>
						<div className='flex justify-between px-2 py-4 items-center border-b'>
							<div className='flex-1 flex items-center gap-x-2'>
								<img
									src={plainBelgain}
									alt=''
									className='w-2/4 rounded-md'
								/>
								<span className='font-medium'>Plain Belgian</span>
							</div>
							<p className='text-4xl border-2 px-4 border-black'>2</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-y-4">
						<div className="flex items-center gap-x-12 text-xl">
							<span className="">Sub-total</span>
							<span className="">₦ 20000</span>
						</div>
						<div className="flex items-center gap-x-12 text-xl">
							<span className="">Shipping</span>
							<span className="">₦ 20000</span>
						</div>
						<div className="flex items-center gap-x-12 text-xl">
							<span className="font-bold">Total</span>
							<span className="">₦ 20000</span>
						</div>
					</div>
					<div className="flex items-center justify-end">
						<TextField
							label='Discount or Promo code'
							placeholder='Enter code'
							className='w-2/3'
						/>
						<button className="px-4 bg-gray-300 rounded-l-none rounded-r-md py-4">Apply</button>
					</div>
					<div className="bg-pri rounded-md px-4 py-2">
						<h4 className="font-bold text-lg">Delivery</h4>
						<p className="text-sm text-justify">
							Our deliveries are made two (2) working days after order placement. Delivery occurs between
							8AM - 6PM
						</p>
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-2xl font-bold">Guest Details</h3>
					<div className="">
						<h4 className="font-bold">Contact</h4>
						<TextField
							label='Email'
							placeholder='Email'
							type='email'
                            className="w-full"
						/>
					</div>
					<div className="space-y-2">
						<h4 className="font-bold">Delivery Information</h4>
						<TextField
							label='Full Name'
							placeholder='Full Name'
                            className="w-full"
						/>
						<TextField
							label='Address'
							placeholder='Address'
                            className="w-full"
						/>
						<TextField
							label='Contact Number'
							placeholder='Contact Number'
                            className="w-full"
						/>
						<div className="space-y-2 lg:flex lg:space-y-0 lg:gap-x-4">
							<TextField
								label='City'
								placeholder='City'
                                className="w-full"
							/>
							<TextField
								label='State'
								placeholder='State'
                                className="w-full"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<h4 className="font-bold">Payment</h4>
						<FormControl>
							{/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
							<RadioGroup
								row
								aria-labelledby='payment-method'
								name='payment'
							>
								<FormControlLabel
									value='Card'
									control={<Radio />}
									label='Card'
								/>
								<FormControlLabel
									value='Bank Transfer'
									control={<Radio />}
									label='Bank Transfer'
								/>
							</RadioGroup>
						</FormControl>
						<TextField
							label='Name on card'
							placeholder='Name on card'
                            className="w-full"
						/>
						<TextField
							label='Card number'
							placeholder='Card number'
                            className="w-full"
						/>
						<div className="space-y-2 lg:flex lg:space-y-0 lg:gap-x-4">
							<TextField
								label='Expiration date'
								placeholder='mm/yyyy'
                                className="w-full"
							/>
							<TextField
								label='CVV'
								placeholder='CVV'
                                className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Checkout
