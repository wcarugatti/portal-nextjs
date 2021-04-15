import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Table } from 'react-bootstrap';


export const FilteringTable = ({data}) => {
	// console.log("data",data)
	const [loading, setLoading] = useState(false);

	return (
		<>
			{loading ? (
				<div className='loading-screen'>
					<ClipLoader size={150} color={'#fff'} loading={loading} />
				</div>
			) : (
				<>
					<label className='label-search'>RESULTADO DA BUSCA</label>
					<div className='div-table'>
						<Table className='table-fixed'>
							<thead>
								<tr>
									<th>
										Vaga
										<br />
									</th>
									<th>
										Empresa
										<br />
									</th>
									<th>
										Local
										<br />
									</th>
									<th>
										Data
										<br />
									</th>
									<th>
										Link
										<br />
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((row, i) => (
									<tr key={i}>
										<td className='label-info'>{row.job}</td>

										<td className='label-info'>{row.employer}</td>

										<td className='label-info'>{row.local}</td>

										<td className='label-info'>{row.date}</td>

										<td>
											<a
												href={row.link}
												target='_blank'
												title={row.description}>
												<button className='td-button'>VISUALIZAR VAGA</button>
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</>
			)}
		</>
	);
};
