import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ismaili from './assets/ismaili.png'

export default function App() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '10px',
				}}
			>
				<h1 style={{ textAlign: 'center' }}>Admin</h1>
				<img src={ismaili} alt='' />
			</div>
			<div style={{}}>
				{/* ...Душанбе +++ */}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1-content'
						id='panel1-header'
					>
						<Typography component='span'>
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Душанбе</p>
						</Typography>
					</AccordionSummary>

					{/* ....Ёгибекова Сафина */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								{' '}
								<p style={{ fontWeight: 'bold' }}>Ёгибекова Сафина</p>{' '}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткахои подвал (пол) <br />
							2) Лесницахо
						</AccordionDetails>
					</Accordion>

					{/* .......Назридодова Саидмо */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Назридодова Саидмо</p>{' '}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткахои подвал (диванен + девол) <br />
							2) Девол (подвал)
						</AccordionDetails>
					</Accordion>

					{/* ....Имронова Насиба */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Имронова Насиба</p>{' '}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Подвал кунчен <br />
							2) Подвал пажарниен
						</AccordionDetails>
					</Accordion>
				</Accordion>

				{/* ...Сешанбе +++*/}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Сешанбе</p>
						</Typography>
					</AccordionSummary>

					{/* ....Силемоншоева Регина */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Силемоншоева Регина</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>1) Кунчен (боло)</AccordionDetails>
					</Accordion>
				</Accordion>

				{/* ...Чоршанбе +++*/}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Чоршанбе</p>
						</Typography>
					</AccordionSummary>

					{/* ....Гуломносирова Назарбегим */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Гуломносирова Назарбегим</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Девол (боло) <br />
							2) Плиинтус (боло)
						</AccordionDetails>
					</Accordion>

					{/* .....Бодурова Малика */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Бодурова Малика</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Скамейкаен (боло) <br />
							2) Чои техникхо (боло)
						</AccordionDetails>
					</Accordion>

					{/* .... */}

					{/* <Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Силемоншоева Регина</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion> */}
				</Accordion>

				{/* ....Панчшанбе +++ */}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>
								Панчшанбе
							</p>{' '}
						</Typography>
					</AccordionSummary>

					{/* ....Дороббекова Зухро */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Дороббекова Зухро</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Гардироб (муж.) <br />
							2) Кунчен (боло)
						</AccordionDetails>
					</Accordion>

					{/* .....Асматбекова Зумратмо */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Асматбекова Зумратмо</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Гардироб (женс.) <br />
							2) Пажарниен (боло)
						</AccordionDetails>
					</Accordion>

					{/* ....Акназаров Ифтихор ++++ */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Акназаров Ифтихор</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Шишахои лесница (муж.тараф, женс.тараф) 2) Дархои подвал <br />
							3) Тирезахои кухнии подвал (1-бор/мох)
						</AccordionDetails>
					</Accordion>

					{/* .... */}

					{/* <Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Силемоншоева Регина</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion> */}
				</Accordion>

				{/* ...Чумъа +++ */}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Чумъа</p>
						</Typography>
					</AccordionSummary>

					{/* ....Тошмамадова Шукрия */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Тошмамадова Шукрия</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткаен пол (боло) <br />
							2) Плиинтус (боло)
						</AccordionDetails>
					</Accordion>

					{/* ....Гафурова Бунафша */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Гафурова Бунафша</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткаен диванен,девол (боло) <br />
							2) Руфтани бисеткахои берун
						</AccordionDetails>
					</Accordion>

					{/* ....Сахриева Асрия */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Сахриева Асрия</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Лесницахо <br />
							2) Скамейкаен <br />
							3) Руфтани бардурхо
						</AccordionDetails>
					</Accordion>

					{/* ...Бахтибекова Малохат */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Бахтибекова Малохат</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткаен пол (подвал) <br />
							2) Кунчен (подвал)
						</AccordionDetails>
					</Accordion>

					{/* ...Девлохтова Каромат */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Девлохтова Каромат</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткаен диванен,девол (подвал) <br />
							2) Бисеткахои берун (скамейкаен)
						</AccordionDetails>
					</Accordion>
				</Accordion>

				{/* ...Шанбе +++ */}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							{' '}
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Шанбе</p>{' '}
						</Typography>
					</AccordionSummary>

					{/* ....Темурбеков Салмон */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Темурбеков Салмон</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Лифт <br />
							2) Гинцак
						</AccordionDetails>
					</Accordion>

					{/* ....Имронова Насиба */}

					{/* <Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Имронова Насиба</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion> */}
				</Accordion>

				{/* ...Якшанбе ++++ */}

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Якшанбе</p>
						</Typography>
					</AccordionSummary>

					{/* ....Мирзохаётова Рангина */}
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Мирзохаётова Рангина</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Бисеткаен пол (боло) <br />
							2) Чои асбобхо (боло)
						</AccordionDetails>
					</Accordion>

					{/* ...Асматбекова Зумратмо */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Асматбекова Зумратмо</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>1) Лесницаен</AccordionDetails>
					</Accordion>

					{/* ...Гуломова Абрина */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Гуломова Абрина</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Кунчен (подвал) <br />
							2) Скамейкаен
						</AccordionDetails>
					</Accordion>

					{/* ...Асламшоева Нигора */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Асламшоева Нигора</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Гардироб (мужс., женс.) <br />
							2) Гардироб пожарниен
						</AccordionDetails>
					</Accordion>

					{/* ...Насридинова Начиба */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Насридинова Начиба</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Гардироб пол (мужс., женс. ) <br />
							2) Кунчен (боло)
						</AccordionDetails>
					</Accordion>

					{/* ....Вафобекова Гулнигин */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Вафобекова Гулнигин</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Плиинтус (боло) <br />
							2) Бисеткаен диванен,девол (боло)
						</AccordionDetails>
					</Accordion>

					{/* ...Холимбеков Сохиб ++++ */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Холимбеков Сохиб</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Дари главний <br />
							2) Лампахои пеши дари главний <br />
							3) Дари reception <br />
							4) Тирезахои дари главний (1-бор/мох)
						</AccordionDetails>
					</Accordion>

					{/* ... Бекчонов Фахриддин +++ */}

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Бекчонов Фахриддин</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Дари главний <br />
							2) Лампахои пеши дари главний <br />
							3) Дари рупаруи reception <br />
							4) Тирезахои дари главний (1-бор/мох)
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>
								<p style={{ fontWeight: 'bold' }}>Холикназаров Шухрат</p>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							1) Перехожка (дари главний) <br />
							2) Перехожка (подвал) <br />
						</AccordionDetails>
					</Accordion>
				</Accordion>

				{/* ///// */}
			</div>
		</>
	)
}
