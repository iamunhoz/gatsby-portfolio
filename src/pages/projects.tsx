import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "./../components/layout"
import Seo from "./../components/seo"
import colors from './../components/colors'
type DataProps = {
  site: {
    buildTime: string
  }
}

const styles = {
  title: {
    backgroundColor: colors.elevated,
    color: colors.text,
    border: `1px solid ${colors.contour}`
  }
}

const projects: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Projects" />
    <div style={styles.title}>Agora</div>
    <div style={styles.title}>Noam</div>
    <div style={styles.title}>Memoria</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default projects

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
