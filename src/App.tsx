import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

export default function App() {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Admin</h1>
			<div style={{}}>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ....... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* .... */}
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>
				</Accordion>
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
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>
				</Accordion>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ..... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ..... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* .... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* .... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* .... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}
				</Accordion>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* .... */}

					<Accordion>
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
					</Accordion>
				</Accordion>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

					{/* .... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

          {/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>

          {/* ... */}

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>
				</Accordion>
			</div>
		</>
	)
}
