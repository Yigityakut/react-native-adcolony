# react-native-adcolony

## Getting started

`$ npm install https://github.com/Yigityakut/react-native-adcolony.git --save`

### Mostly automatic installation

`$ react-native link react-native-adcolony`

## Usage
```javascript
import Adcolony from 'react-native-adcolony';

const APPID = 'appa****YOUR APP ID****';
const ZONEID = '*** YOUR ZONE ID***';

 configure = () => {
    Adcolony.configure(APPID, ZONEID);
  };

  load = () => {
    Adcolony.loadAds(ZONEID);
  };

  show = () => {
    Adcolony.isReady(ZONEID, (ready)=>{
      if (ready) 
        Adcolony.showAdInterstitial(ZONEID, () => { });
    });
  };

```
