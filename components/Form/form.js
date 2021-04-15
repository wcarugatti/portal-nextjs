import React, { useState } from 'react';
import './form.css';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from '../FloatingLabel/floatinglabel';

export default ({ value, handleTextChange, isActive, onSubmitAction }) => {
	return (
		<div className='bg-color'>
			<div className='split left'>
				<Container fluid className='h-100'>
					<Row className='form-cadastro justify-content-center'>
						<Col className='col-md-8 align-self-center area-form'>
							<Form className='mb-3'>
								<Form.Group className='mt-2'>
									<FloatingLabel
										type='text'
										name='cod_cliente_raiz'
										placeholder='Codigo Cliente Raíz'
										value={value.cod_cliente_raiz}
										onChangeText={handleTextChange}
										isActive={isActive.cod_cliente_raiz}
									/>
									<FloatingLabel
										type='text'
										name='cod_cliente_rp'
										placeholder='Codigo Cliente R.P.'
										value={value.cod_cliente_rp}
										onChangeText={handleTextChange}
										isActive={isActive.cod_cliente_rp}
									/>
									<FloatingLabel
										type='text'
										name='numero_acesso'
										placeholder='Número do acesso'
										value={value.numero_acesso}
										onChangeText={handleTextChange}
										isActive={isActive.numero_acesso}
									/>
									<FloatingLabel
										type='text'
										name='cnpj'
										placeholder='CNPJ'
										value={value.cnpj}
										onChangeText={handleTextChange}
										isActive={isActive.cnpj}
									/>
									<FloatingLabel
										type='text'
										name='cod_fatura'
										placeholder='Código da fatura'
										value={value.cod_fatura}
										onChangeText={handleTextChange}
										isActive={isActive.cod_fatura}
									/>
									<FloatingLabel
										type='text'
										name='data_vencimento_fatura'
										placeholder='Data de vencimento da fatura'
										value={value.data_vencimento_fatura}
										onChangeText={handleTextChange}
										isActive={isActive.data_vencimento_fatura}
									/>

									<Button
										className='btn-info btn-block mt-2'
										onClick={onSubmitAction}>
										Buscar
									</Button>
								</Form.Group>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='split right'>
				<label>Consultas Recentes</label>
			</div>
		</div>
	);
};
