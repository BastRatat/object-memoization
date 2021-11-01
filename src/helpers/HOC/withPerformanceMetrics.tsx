import React, { Profiler } from 'react'

type ProfilerOnRenderCallback = (
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<SchedulerInteraction>,
) => void

export interface SchedulerInteraction {
  __count: number
  id: number
  name: string
  timestamp: number
}

export interface withPerformanceMetricsProps {
  id?: string
  phase?: 'mount' | 'update'
  actualDuration?: number
  baseDuration?: number
  startTime?: number
  commitTime?: number
  interactions?: Set<SchedulerInteraction>
}

export const withPerformanceMetrics = <P extends withPerformanceMetricsProps>(
  WrappedComponent: React.ComponentType<P>,
  displayName: string,
) => {
  const WithPerformanceMetrics = (
    props: Omit<P, keyof withPerformanceMetricsProps>,
  ) => {
    const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration) => {
      console.table({
        componentName: id,
        componentPhase: phase,
        duration: `${actualDuration.toFixed(2)}s`,
      })
    }

    return (
      <Profiler id={displayName} onRender={onRender}>
        <WrappedComponent {...(props as P)} />
      </Profiler>
    )
  }

  WithPerformanceMetrics.displayName = `WithPerformanceMetrics(${displayName})`

  return WithPerformanceMetrics
}
