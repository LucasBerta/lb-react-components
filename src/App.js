import { useState } from 'react';
import './App.scss';
import Badge from './components/badge/Badge';
import Button from './components/button/Button';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="app">
      <div>
        <Button size='sm'>LONG TEST TEXT</Button>
        <Button size='md' color='success'>LONG TEST TEXT</Button>
        <Button size='lg' color='info'>LONG TEST TEXT</Button>
        <Button size='lg' color='info' staticButton>
          <Badge variant='dot' />
          STATIC BUTTON
        </Button>
      </div>
      <div>
        <Button size='sm' variant='outlined'>LONG TEST TEXT</Button>
        <Button size='md' variant='outlined' color='success'>
          <Badge showZero>0</Badge>
          LONG TEST TEXT
        </Button>
        <Button size='lg' variant='outlined' color='accent' onClick={() => setValue(value === 0 ? 1 : 0)} >
          <Badge>{value}</Badge>
          LONG TEST TEXT
        </Button>
        <Button size='lg' variant='outlined' onClick={() => alert('It works!')}>
          <Badge max={15}>15</Badge>
          Click me
        </Button>
      </div>
      <div>
        <Button size='sm' variant='contained' color='primary'>LONG TEST TEXT</Button>
        <Button size='md' variant='contained' color='success'>LONG TEST TEXT</Button>
        <Button size='lg' variant='contained' color='accent'>LONG TEST TEXT</Button>
        <Button size='lg' variant='contained' color='info'>
          LONG TEST TEXT
          <Badge />
        </Button>
      </div>
      <div>
        <Button size='md' variant='outlined' color='success' disabled>LONG TEST TEXT</Button>
        <Button size='lg' variant='contained' color='accent' disabled>LONG TEST TEXT</Button>
        <Button size='lg' variant='contained' color='accent' disabled onClick={() => alert('I should not be here!')}>CLICK ME</Button>
        <Button size='lg' variant='contained' color='accent' staticButton>Static Button</Button>
      </div>
      <div>
        <Button size='sm' color='primary' circular>
          <Badge variant='dot' overlap='circular' />
          i
        </Button>
        <Button size='md' variant='outlined' color='primary' disabled circular>i</Button>
        <Button size='lg' variant='contained' color='accent' circular>i</Button>
        <Button size='lg' variant='contained' color='success' staticButton circular>
          <Badge overlap='circular' />
          i
        </Button>
      </div>
    </div >
  );
}

export default App;
