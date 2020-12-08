import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { NavBar } from '@components/NavBar';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  return(
    <div>
      <NavBar />
    </div>
  )
}

const mapStateToProps = state => ({
  text: state.test.text
});


export default connect(mapStateToProps, {} )(Home);