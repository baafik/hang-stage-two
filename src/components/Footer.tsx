import { Icon } from "@iconify/react"

const Footer = () => {
	return (
		<footer className='bg-pri flex flex-col md:flex-row md:gap-y-0 md:gap-x-0 md:justify-between md:items-center md:px-8  p-4 gap-y-4'>
			<div className='w-2/5'>
				<h3 className="text-lg font-medium">About</h3>
				<p className="text-sm text-justify text-black/70">
					More Than Wafels is a company that specializes in Delicious, Artisan Belgian Waffles & Brunch treats
				</p>
			</div>
			<div className=''>
				<h3 className="text-lg font-medium">Customer Service</h3>
				<p className="text-sm text-black/70"> - Shipping Information </p>
				<p className="text-sm text-black/70"> - Terms & Conditions </p>
			</div>
			<div className=''>
				<h3 className="text-lg font-medium">Contact</h3>
				<p className="text-sm text-black/70 flex items-center gap-x-2">
					<span>
						<Icon icon='material-symbols:mail-outline' />
					</span>
					<span>morethanwafels@gmail.com</span>
				</p>
				<p className="text-sm text-black/70 flex items-center gap-x-2">
					<span>
						<Icon icon='ph:phone' />
					</span>
					<span>+2348176754434</span>
				</p>
			</div>
			<div className='flex gap-x-4 self-end'>
				<span>
					<Icon icon='skill-icons:instagram' />
				</span>
				<span>
					<Icon icon='devicon:twitter' />
				</span>
			</div>
		</footer>
	)
}
export default Footer
