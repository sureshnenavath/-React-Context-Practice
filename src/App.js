import {Component} from 'react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageContext from './context/context'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state

    return (
      <LanguageContext.Provider
        value={{
          activeLanguage: activeLanguage,
          changeLanguage: this.changeLanguage,
        }}
      >
        <>
          <Header />
          <LandingSection />
          <FeaturesSection />
        </>
      </LanguageContext.Provider>
    )
  }
}

export default App
