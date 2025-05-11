'use client'

import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

// Dynamic import to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface StatsChartProps {
  stats: {
    users: number
    posts: number
    comments: number
  }
}

export default function StatsChart({ stats }: StatsChartProps) {
  const barChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
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
    },
    labels: ['Users', 'Posts', 'Comments'],
    colors: ['#3B82F6', '#10B981', '#F59E0B'],
    legend: {
      position: 'bottom',
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
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Data Distribution (Pie Chart)</h3>
        <Chart
          options={pieChartOptions}
          series={pieChartSeries}
          type="pie"
          height={350}
        />
      </div>
    </div>
  )
}