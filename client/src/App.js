import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NewWork from './components/art/NewWork'
import PreviousWork from './components/art/PreviousWork'
import Portraits from './components/art/Portraits'
import Sketches from './components/art/Sketches'
import NewsBio from './components/art/NewsBio'
import PaintingShow from './components/art/PaintingShow'
import EnquireForm from './components/common/EnquireForm'
import ThankYou from './components/common/ThankYou'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NewWork} />
        <Route path="/previous-work" component={PreviousWork} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/sketches" component={Sketches} />
        <Route path="/news-bio" component={NewsBio} />
        <Route path="/pictures/:id" component={PaintingShow} />
        <Route path="/enquire-form" component={EnquireForm} />
        <Route path="/thank-you" component={ThankYou} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
