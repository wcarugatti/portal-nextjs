import React from 'react';
import { useRouter } from 'next/router';
// import logo from '../../util/job-y-jobs.jpeg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Logo from "../../util/logo-branca.svg";
export default function VerticalNavBar({
	sidebar,
	toggleSidebar,
	filter,
	summary,
}) {
	const router = useRouter();
	const filterString = 'Filtro: ' + (filter == 'home' ? 'Nenhum' : filter);

	const filterRedirect = function (item) {
		if (typeof window !== 'undefined') {
			router.push({
				pathname: '/[filter]/[page]',
				query: { filter: item, page: 1 },
			});
			toggleSidebar();
		}
	};

	return (
		<div className={'vertical-nav ' + (sidebar ? 'active' : '')} id='sidebar'>
			<div className='py-4 px-3 mb-4 d-flex flex-column'>
				<Logo className="mb-3" style={{marginRight: "-20px"}} height="50px"/>
				<DropdownButton
					id='dropdown-basic-button'
					title={filterString}
					className='text-center w-100 bg-orange'>
					<Dropdown.Item onClick={() => filterRedirect('home')}>
						Nenhum
					</Dropdown.Item>
					{Object.keys(summary).map((item) => (
						<Dropdown.Item key={item} onClick={() => filterRedirect(item)}>
						{item[0].toUpperCase() + item.substring(1)}
						</Dropdown.Item>
					))}
				</DropdownButton>
			</div>

			<div
				id='sidebarCollapse'
				className={sidebar ? 'rotate' : ''}
				onClick={() => toggleSidebar()}
				type='button'>
				<img src='/images/back.svg' />
			</div>

		</div>
	);
}
