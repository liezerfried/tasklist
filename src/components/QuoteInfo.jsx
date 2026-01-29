import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, CircularProgress, Box } from '@mui/material';
import { getRandomQuote } from '../api/zenQuotesApi';

const QuoteInfo = () => {
	const [quote, setQuote] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchQuote = async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await getRandomQuote();
			setQuote(data);
		} catch {
			setError('No se pudo obtener la frase. Intenta nuevamente.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<Box display="flex" justifyContent="center" my={2}>
			<Card sx={{ minWidth: 320, maxWidth: 500, boxShadow: 3 }}>
				<CardContent>
					{loading ? (
						<Box display="flex" justifyContent="center" alignItems="center" minHeight={80}>
							<CircularProgress />
						</Box>
					) : error ? (
						<Typography color="error" align="center">{error}</Typography>
					) : (
						<>
							<Typography variant="h6" align="center" gutterBottom>
								"{quote.quote}"
							</Typography>
							<Typography variant="subtitle2" align="center" color="text.secondary">
								— {quote.author}
							</Typography>
						</>
					)}
					<Box display="flex" justifyContent="center" mt={2}>
						<Button variant="contained" color="primary" onClick={fetchQuote} disabled={loading}>
							Nueva frase
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default QuoteInfo;
