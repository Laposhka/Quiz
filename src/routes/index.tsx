import React from 'react'
import { Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Loading from '../components/loading'
import Home from '../views/home'
import Quiz from '../views/quiz'
import Result from '../views/result'
import QuizProtect from '../components/guards/quizProtect'
import ResultProtect from '../components/guards/resultProtect'

interface IRoute {
    exact?: boolean;
    path: string;
    guard?: React.FC;
    component: any;
}

export function renderRoutes(allRoutes: IRoute[]) {
    return (
        <Router>
          <Suspense fallback={<Loading />}>
            {
                <Routes>
                    {
                        allRoutes.map((route: IRoute, i: number) => {
                            const Component = route.component;
                            console.log(Component);
                            const Guard = route.guard || Fragment;

                            return (
                                <Route
                                    key={i}
                                    path={route.path!}
                                    element={<Guard>{route.component}</Guard>}
                                />
                            )}
                        )
                    }
                </Routes>
            }
          </Suspense>
        </Router>
      );
}

const allRoutes: IRoute[] = [
    {
        exact: true,
        path: '/',
        component: <Home/>
    },
    {
        exact: true,
        path: '/quiz',
        guard: QuizProtect,
        component: <Quiz/>
    },
    {
        exact: true,
        path: '/result',
        guard: ResultProtect,
        component: <Result/>,
    }
]

export default allRoutes