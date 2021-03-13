import React, {Fragment} from 'react'
import ScrollToTop  from '../components/customHooks/ScrollToTop';
import HomeTop from '../components/HomeComp/HomeTop'
import HomeMid from '../components/HomeComp/HomeMid'
import HomeBot from '../components/HomeComp/HomeBot'
import MetaData from '../components/Layout/MetaData';
export default function Home() {
	return (
		<div className='home'>
		<Fragment>
			<MetaData title={'Home'}></MetaData>
		<ScrollToTop />

			<HomeTop/>
			<HomeMid/>
			<HomeBot/>
		</Fragment>
	</div>
	)
}
