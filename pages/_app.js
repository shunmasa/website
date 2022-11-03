import '../styles/index.scss';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/ui/Theme';
import { AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import { useTransition } from '../src/components/block1/useTransition';

const App = ( { Component, pageProps, router, location } )=>{
// const transitionCallback = useTransition();
const apolloClient = useApollo( pageProps );

  return (
	<ThemeProvider theme={Theme}>
<AnimateSharedLayout type='crossfade'>
	 <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => window.scrollTo( 0, 0 )}>

		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} location={location}key={router.route}/>

		</ApolloProvider>
		</AnimatePresence>
		</AnimateSharedLayout>
		</ThemeProvider>

		);
};

export default App;
