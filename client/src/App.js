import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NewWork from './components/art/NewWork'
import Portraits from './components/art/Portraits'
import Sketches from './components/art/Sketches'
import NewsBio from './components/art/NewsBio'
import PaintingShow from './components/art/PaintingShow'
import EnquireForm from './components/common/EnquireForm'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-work" component={NewWork} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/sketches" component={Sketches} />
        <Route path="/news-bio" component={NewsBio} />
        <Route path="/pictures/:id" component={PaintingShow} />
        <Route path="/enquire-form" component={EnquireForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
