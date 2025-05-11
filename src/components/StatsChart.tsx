'use client'

import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface StatsChartProps {
  stats: {
    users: number
    posts: number
    comments: number
  }
}

export default function StatsChart({ stats: initialStats }: StatsChartProps) {
  const [stats, setStats] = useState(initialStats)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Update chart data when props change
  useEffect(() => {
    setStats(initialStats)
    setLastUpdated(new Date())
  }, [initialStats])

  const barChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Users', 'Posts', 'Comments'],
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ['#3B82F6', '#10B981', '#F59E0B'],
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toString()
        },
      },
    },
    title: {
      text: `Last updated: ${lastUpdated.toLocaleTimeString()}`,
      align: 'right',
      style: {
        fontSize: '12px',
        color: '#666',
      },
    },
  }

  const barChartSeries = [
    {
      name: 'Count',
      data: [stats.users, stats.posts, stats.comments],
    },
  ]

  const pieChartOptions: ApexOptions = {
    chart: {
      type: 'pie',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    labels: ['Users', 'Posts', 'Comments'],
    colors: ['#3B82F6', '#10B981', '#F59E0B'],
    legend: {
      position: 'bottom',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.round(Number(val)) + '%'
      },
    },
    title: {
      text: `Last updated: ${lastUpdated.toLocaleTimeString()}`,
      align: 'right',
      style: {
        fontSize: '12px',
        color: '#666',
      },
    },
  }

  const pieChartSeries = [stats.users, stats.posts, stats.comments]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
        <h3 className="text-lg font-medium text-green-900 mb-4">Data Distribution (Bar Chart)</h3>
        <Chart
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
          key={`bar-${lastUpdated.getTime()}`} // Force re-render on update
        />
      </div>
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
        <h3 className="text-lg font-medium text-green-900 mb-4">Data Distribution (Pie Chart)</h3>
        <Chart
          options={pieChartOptions}
          series={pieChartSeries}
          type="pie"
          height={350}
          key={`pie-${lastUpdated.getTime()}`} // Force re-render on update
        />
      </div>
    </div>
  )
}