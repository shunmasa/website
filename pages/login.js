import { useState } from 'react';
import  isEmpty  from '../utils/isEmpty';
import {handleRedirectsAndReturnData} from '../utils/query_slug';
import validateAndSanitizeLoginForm from '../utils/validate';
import axios from 'axios';
import {sanitize} from '../utils/sanitize';
import { initializeApollo, addApolloState } from '../src/apollo/client';
import {GET_PAGE} from '../src/queries/pages/get-page';
import {useRouter} from 'next/router';
import {getPreviewRedirectUrl} from '../utils/redirects';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles( theme => ( {
	paper: {
	marginTop: theme.spacing( 8 ),
	display: 'flex',
	flexDirection: 'column',
    alignItems: 'center'
	},
	avatar: {
 margin: theme.spacing( 1 ),
backgroundColor: theme.palette.secondary.main
	},
	form: {
width: '100%', // Fix IE 11 issue.
marginTop: theme.spacing( 1 )
	},
	submit: {
	margin: theme.spacing( 3, 0, 2 )
	}
  } ) );

const Login = ( ) => {
	const router = useRouter();
	const classes = useStyles();
    console.log( 'router', router.query );
	const [ loginFields, setLoginFields ] = useState( {
		username: '',
		password: '',
	} );

  console.log( 'router', router );
	const [ errorMessage, setErrorMessage ] = useState( null );
	const [ loading, setLoading ] = useState( false );

	const onFormSubmit = ( event ) => {
		event.preventDefault();
		setErrorMessage( null );

		const {postType, preview_id, previewPostId} = router?.query ?? {};
        console.log( 'postType', router?.query );
		const validationResult = validateAndSanitizeLoginForm( {
			username: loginFields?.username ?? '',
			password: loginFields?.password ?? '',
		} );


        console.log( 'validate', validationResult.isValid );
		if ( validationResult.isValid ) {
			setLoading( true );
			return axios( {
				data: {
					username: validationResult?.sanitizedData?.username ?? '',
					password: validationResult?.sanitizedData?.password ?? '',
				},
				method: 'post',
				url: '/api/login'
			} )
				.then( ( data ) => {
					setLoading( false );
					console.log( 'data', data );
					const {success} = data?.data ?? {};
					console.log( 'post', preview_id );
					if  ( success && postType && previewPostId ) {
						const previewUrl = getPreviewRedirectUrl( postType, previewPostId );
						console.log( 'url', previewUrl );
						router.push( previewUrl );
					}


					return data?.data?.success;
				} )
				.catch( () => {
					setLoading( false );
					return false;
				} );
		} else {
			setClientSideError( validationResult );
		}
	};

	const setClientSideError = ( validationResult ) => {
		if ( validationResult.errors.password ) {
			setErrorMessage( validationResult.errors.password );
		}

		if ( validationResult.errors.username ) {
			setErrorMessage( validationResult.errors.username );
		}
	};

	const handleOnChange = ( event ) => {
		setLoginFields( { ...loginFields, [event.target.name]: event.target.value } );
	};


	const { username, password } = loginFields;
	return (
		// <Layout data={data}>
			// <div>

			<Container component="main" maxWidth="xs">
			 	{! isEmpty( errorMessage ) && (
					<div
						className="text-red-600"
						dangerouslySetInnerHTML={{ __html: sanitize( errorMessage ) }} 		/>
		)}
			<CssBaseline />
			<div className={classes.paper}>
			  <Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			  </Avatar>
			  <Typography component="h1" variant="h5">
				Sign in
			  </Typography>
			  <form onSubmit={onFormSubmit} className={classes.form} noValidate>
				<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="username"
				value={username}
onChange={handleOnChange}
				label="User Name"
				name="username"
				autoComplete="username"
				autoFocus
				/>
				<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				value={password}
				onChange={handleOnChange}
				type="password"
				id="password"
				autoComplete="current-password"
				/>


				{/* <FormControlLabel
				  control={<Checkbox value="remember" color="primary" />}
				  label="Remember me"
				/> */}
				<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
				>
				  Sign In
				</Button>
				{/* <Grid container>
				  <Grid item xs>
					<Link href="#" variant="body2">
					  Forgot password?
					</Link>
				  </Grid>
				  <Grid item>
					<Link href="#" variant="body2">
					  {"Don't have an account? Sign Up"}
					</Link>
				  </Grid>
				</Grid> */}
					{loading ? <p>Loading...</p> : null  }
			  </form>

			</div>
		  </Container>
		// </Layout>
	);
};
export default Login;

// export async function getStaticProps( ) {

//     const apolloClient = initializeApollo();

//     const { data, errors }  =  await apolloClient.query( {
//         query: GET_PAGE,
//       } );

// 	const apolloProps = addApolloState( apolloClient, {
// 		props: {data},
// 		revalidate: 10,
// 	} );

//    return handleRedirectsAndReturnData( apolloProps, data, errors, 'page' );
// }
