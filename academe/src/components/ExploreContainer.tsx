import {
  IonTabs,
  IonTab,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import { FiMusic } from 'react-icons/fi'; 
import { GoHome, GoPackage,GoPerson, GoChevronDown } from 'react-icons/go';
import { library, search } from 'ionicons/icons'; // Use homeOutline for the icon
import '../index.css';
import { CgMenuGridO } from "react-icons/cg";
import logo from '../assets/academe-logo.png';
import lms from '../assets/lms-logo.png'
import sms from '../assets/sms.png'
import cassareal from '../assets/cassareal-logo.jpg'
import { HiMenuAlt3 } from "react-icons/hi";
import './ExploreContainer.css';

function Example() {
  const handleSearch = (event: CustomEvent) => {
    const searchValue = event.detail.value;
    console.log('Search value:', searchValue);
    // Add your search logic here
  };

  return (
    <IonTabs>
      <IonTab tab="home">
        <div id="home-page" className="h-full flex flex-col">
          <IonHeader className='flex justify-between px-4 py-2 shadow-none'>
            <IonImg src={logo} alt="Logo" className="h-8" /> 
            <HiMenuAlt3 className='w-10 h-8'/>
          </IonHeader>
          <IonContent className="flex-1">
            <div className="container mx-auto p-4"> 
                <IonSearchbar 
                  placeholder="Search..." 
                  onIonInput={handleSearch} 
                  className="my-custom-searchbar overflow-hidden" 
                />
                <div className='flex justify-between px-2 py-4'>
                  <div className='flex gap-1 items-center justify-center'>
                    <span className='font-medium text-sm'>Name</span>
                    <GoChevronDown className='h-5 w-4' />
                  </div>
                  <div>
                  <CgMenuGridO className='h-8 w-6'/>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-2 gap-1">
                    <a href="https://schools.academelms.com/">
                      <IonCard className="listen-now-card mt-4">
                        <IonCardHeader className="flex items-start"> 
          
                          <IonImg src={lms} alt='Academe LMS' className='h-6 w-6' />
                          <IonCardTitle className="text-sm font-semibold">Academe LMS Schools</IonCardTitle> {/* Title with a smaller font */}
                        </IonCardHeader>
                        <IonCardContent className="">
                          {/* Date and time */}
                          <div className="text-sm text-gray-500">Created at: 01/4/24</div>
                        </IonCardContent>
                      </IonCard>
                    </a>

                  <a href="https://goals.academelms.com/">
                    <IonCard className="listen-now-card mt-4">
                      <IonCardHeader className="flex items-start"> 
         
                        <IonImg src={lms} alt='Academe LMS' className='h-6 w-6' />
                        <IonCardTitle className="text-sm font-semibold">Academe LMS Goals</IonCardTitle> {/* Title with a smaller font */}
                      </IonCardHeader>
                      <IonCardContent className="">
                        {/* Date and time */}
                        <div className="text-sm text-gray-500">Created at: 01/4/24</div>
                      </IonCardContent>
                    </IonCard>
                  </a>

                    <IonCard className="listen-now-card mt-4">
                      <IonCardHeader className="flex items-start"> 
         
                        <IonImg src={sms} alt='Academe LMS' className='h-6 w-10' />
                        <IonCardTitle className="text-sm font-semibold">Academe SMS Demo</IonCardTitle> {/* Title with a smaller font */}
                      </IonCardHeader>
                      <IonCardContent className="">
                      
                        <div className="text-sm text-gray-500">Created at: 01/4/24</div>
                      </IonCardContent>
                    </IonCard>
                  <a href="https://www.cassareal.com">
                    <IonCard className="listen-now-card mt-4">
                      <IonCardHeader className="flex items-start"> 
         
                        <IonImg src={cassareal} alt='Academe LMS' className='h-8 w-10' />
                        <IonCardTitle className="text-sm font-semibold">CassaReal Real Estate</IonCardTitle> {/* Title with a smaller font */}
                      </IonCardHeader>
                      <IonCardContent className="">
                      
                        <div className="text-sm text-gray-500">Created at: 01/4/24</div>
                      </IonCardContent>
                    </IonCard>
                  </a>

                    {/* Add more cards as needed */}
                  </div>
                </div>
            </div>
          </IonContent>
        </div>
      </IonTab>

      <IonTab tab="radio">
        <div id="radio-page" className="h-full flex flex-col">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Radio</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="flex-1">
            <div className="container mx-auto p-4"> {/* Container for styling */}
              <div className="example-content">Radio content</div>
            </div>
          </IonContent>
        </div>
      </IonTab>

      <IonTab tab="library">
        <div id="library-page" className="h-full flex flex-col">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Library</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="flex-1">
            <div className="container mx-auto p-4"> {/* Container for styling */}
              <div className="example-content">Library content</div>
            </div>
          </IonContent>
        </div>
      </IonTab>

      <IonTab tab="search">
        <div id="search-page" className="h-full flex flex-col">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Search</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="flex-1">
            <div className="container mx-auto p-4"> {/* Container for styling */}
              <div className="example-content">Search content</div>
            </div>
          </IonContent>
        </div>
      </IonTab>

      <IonTabBar slot="bottom" className='border-t-2'>
        <IonTabButton tab="home">
          <GoHome className='w-10 h-6' />
          Home
        </IonTabButton>
        <IonTabButton tab="radio">
          <GoPackage className='w-10 h-6' />
          Explore
        </IonTabButton>
        <IonTabButton tab="library">
          <IonIcon icon={library} />
          Library
        </IonTabButton>
        <IonTabButton tab="search">
        <GoPerson className='w-10 h-6' />
          Profile
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default Example;
