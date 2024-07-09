import { IconButton, TextField } from "@mui/material"
import { Icon } from "@iconify/react"
import Layout from "../components/Layout"
import { plainBelgain } from "../assets"
import { useState } from "react"
// import './routes.css'
const Cart = () => {
	const [orderNotes, setOrderNotes] = useState("")
	return (
		<Layout>
			<div className='flex items-center gap-x-2 text-black/70 md:px-8 lg:px-32'>
				<span className='font-bold'>Shop All</span> {">"}
				<span>Plain Belgain</span> {">"}
				<span>Cart</span>
			</div>
			<h2 className='text-3xl md:hidden font-bold'>Plain Belgian</h2>
			<div className='w-full flex flex-col items-center md:flex-row md:gap-x-16 lg:gap-x-16  md:px-8 lg:px-32 box-border '>
				<div className=''>
					<div className='w-full py-4 space-y-4'>
						<div className='max-w-[250px] mx-auto'>
							<img
								src={plainBelgain}
								alt=''
								className='rounded-md'
							/>
						</div>
						<div className='w-full flex gap-x-8 overflow-auto'>
							<img
								src={plainBelgain}
								alt=''
								className='w-1/3 md:w-1/4 aspect-square rounded-md'
							/>
							<img
								src={plainBelgain}
								alt=''
								className='w-1/3 md:w-1/4 aspect-square rounded-md'
							/>
							<img
								src={plainBelgain}
								alt=''
								className='w-1/3 md:w-1/4 aspect-square rounded-md'
							/>
						</div>
					</div>

					<div className='hidden md:block w-full py-16'>
						<TextField
							label='Order Notes'
							placeholder='Type something here'
							multiline
							rows={4}
                            className="w-full"
							value={orderNotes}
							onChange={e=> setOrderNotes(e.target.value)}
						/>
					</div>
				</div>
				<div className='space-y-4'>
					<h2 className='text-3xl hidden md:block font-bold'>Plain Belgian</h2>
					<div className='flex'>
						<Icon
							icon='ic:round-star'
							className='text-yellow-400 text-3xl'
						/>
						<Icon
							icon='ic:round-star'
							className='text-yellow-400 text-3xl'
						/>
						<Icon
							icon='ic:round-star'
							className='text-yellow-400 text-3xl'
						/>
						<Icon
							icon='ic:round-star'
							className='text-black text-3xl'
						/>
						<Icon
							icon='ic:round-star'
							className='text-black text-3xl'
						/>
					</div>
					<div className='flex items-center gap-x-4'>
						<span className='px-4 border-4 text-3xl border-black text-black font-black flex items-center'>
							{" "}
							-{" "}
						</span>
						<span className='text-black text-3xl'> 2 </span>
						<span className='px-4 border-4 text-3xl border-black text-black font-black flex items-center'>
							{" "}
							+{" "}
						</span>
						<IconButton>
							<Icon icon='flowbite:trash-bin-outline' />
						</IconButton>
					</div>
					<div>
						<p>₦ 20000</p>
					</div>
					<div>
						<p className='text-sm'>
							<span className='font-bold underline'>Shipping</span> calculated at checkout
						</p>
					</div>
					<div>
						<h4 className='text-black font-bold text-xl'>Description</h4>
						<p>Belgian Waffle made with butter, milk, and eggs, and pearl sugar imported from Belgium. </p>
					</div>
					<div className='flex items-center gap-x-4'>
						<span className='text-black bg-pri rounded-md px-4 py-2 text-sm'>Box of 4</span>
						<span className='text-black bg-pri rounded-md px-4 py-2 text-sm'>Box of 4</span>
						<span className='text-black bg-pri rounded-md px-4 py-2 text-sm'>Box of 4</span>
					</div>
					<div className='flex items-center gap-x-4'>
						<button className='text-xl text-black bg-pri px-4 py-2 rounded-lg border-2 border-black'>
							Save for later
						</button>
						<button className='text-xl text-black bg-pri px-4 py-2 rounded-lg border-2 border-black'>
							Add to cart
						</button>
					</div>
					<div>
						<h4 className=' text-black font-bold border-b border-black '>STORAGE</h4>
						<p className='text-sm'>
							Waffles contain no preservatives Store for up to 1 week in an air tight container in a
							fridge or freezer
						</p>
					</div>
					<div>
						<h4 className=' text-black font-bold border-b border-black '>DELIVERY INFORMATION</h4>
						<p>
							Our deliveries are made two (2) working days after order placement. Delivery occurs between
							8AM - 6PM
						</p>
					</div>
					<div>
						<h4 className='flex justify-between text-black font-bold border-b border-black '>
							<span>REHEATING INSTRUCTIONS</span>
							<button>+</button>
						</h4>
					</div>
					<div>
						<h4 className='flex justify-between text-black font-bold border-b border-black '>
							<span>ALLERGENS</span>
							<button>+</button>
						</h4>
					</div>
					<button>Continue Shopping</button>
				</div>
			</div>
		</Layout>
	)
}
export default Cart
