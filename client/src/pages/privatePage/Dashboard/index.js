import React, {Suspense} from 'react';

import Loading from 'components/Loading';

import './Dashboard.scss'

const StackedAreaChart = React.lazy(()=> import('components/Diagram/StackedAreaChart'));
const SimpleLineChart = React.lazy(()=> import('components/Diagram/SimpleLineChart'));
const TinyBarChart = React.lazy(()=> import('components/Diagram/TinyBarChart'));
const LineBarAreaComposedChart = React.lazy(()=> import('components/Diagram/LineBarAreaComposedChart'));


function Dashboard() {
  return (
    <>
      <h1 className={'dashboard-title'}>Dashboard</h1>
      <div className={'diagram-list'}>
        <div className={'diagram-item'}>
          <Suspense fallback={<Loading />}>
            <StackedAreaChart />
          </Suspense>
        </div>
        <div className={'diagram-item'}>
          <Suspense fallback={<Loading />}>
            <SimpleLineChart />
          </Suspense>
        </div>
        <div className={'diagram-item'}>
          <Suspense fallback={<Loading />}>
            <TinyBarChart />
          </Suspense>
        </div>
        <div className={'diagram-item'}>
          <Suspense fallback={<Loading />}>
            <LineBarAreaComposedChart />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
