import React from 'react';
import { useRouter } from 'next/router';
// import logo from '../../util/job-y-jobs.jpeg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
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
				<DropdownButton
					id='dropdown-basic-button'
					title={filterString}
					className='text-center w-100'>
					<Dropdown.Item onClick={() => filterRedirect('home')}>
						Nenhum
					</Dropdown.Item>
					{Object.keys(summary).map((item) => (
						<Dropdown.Item key={item} onClick={() => filterRedirect(item)}>
							{item} - {summary[item]}
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

			{/* <div className="py-4 px-3 mb-4 profile">
        <div className="media-body text-center">
          <h4 className="mb-0 media-content">Rahul Yaduvanshi</h4>
          <p className=" mb-0 media-sub-content">UI/UX Developer</p>
        </div>
      </div>

      <ul className="nav flex-column  mb-0">
        <li className="nav-item active p-2">
          <FloatingLabel
            type="text"
            name="cod_cliente_raiz"
            placeholder="Codigo Cliente Raíz"
          />
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="images/favourite.svg" height="15" width="auto" />
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="images/telegram.svg" height="15" width="auto" />
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="images/image.svg" height="15" width="auto" />
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src="images/instagram.svg" height="15" width="auto" />
            Instagram
          </a>
        </li>
      </ul> */}
		</div>
	);
}
