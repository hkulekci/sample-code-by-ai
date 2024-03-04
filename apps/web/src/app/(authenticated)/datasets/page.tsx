'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Avatar } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DatasetsOverviewPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [datasets, setDatasets] = useState([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to view datasets', { variant: 'error' })
      router.push('/')
      return
    }

    const fetchDatasets = async () => {
      try {
        const datasetsFound = await Api.Dataset.findMany({ includes: ['user', 'areas'] })
        setDatasets(datasetsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch datasets', { variant: 'error' })
      }
    }

    fetchDatasets()
  }, [userId, router])

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>CO2 Emissions Datasets</Title>
        <Paragraph>
          Explore the datasets related to CO2 emissions. Click on a dataset to view more details.
        </Paragraph>
        <Row gutter={[16, 16]}>
          {datasets?.map(dataset => (
            <Col xs={24} sm={12} md={8} lg={6} key={dataset.id}>
              <Card
                hoverable
                onClick={() => router.push(`/datasets/${dataset.id}`)}
                title={dataset.name}
                extra={<Avatar src={dataset.user?.pictureUrl || ''} />}
              >
                <Card.Meta
                  avatar={<EnvironmentOutlined />}
                  title={dataset.name}
                  description={dataset.description || 'No description available'}
                />
                <Paragraph>
                  <strong>Created by:</strong> {dataset.user?.name || 'Unknown'}
                </Paragraph>
                <Paragraph>
                  <strong>Date Created:</strong> {dayjs(dataset.dateCreated).format('DD/MM/YYYY')}
                </Paragraph>
                <Paragraph>
                  <strong>Areas Covered:</strong> {dataset.areas?.length || 0}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}