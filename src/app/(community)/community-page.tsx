import Posts from "@/components/posts"
import ScrollToTop from "@/components/scroll-to-top"

import type { Community } from "@/data"
import type { NextPageProps } from "@/utils/types"

const CommunityPage = ({
  searchParams,
  source
}: NextPageProps & {
  source: Community
}) => {
  const after = searchParams?.after
  const before = searchParams?.before

  const checkedAfter = Array.isArray(after) ? undefined : after
  const checkedBefore = Array.isArray(before) ? undefined : before

  return (
    <>
      <Posts source={source} after={checkedAfter} before={checkedBefore} />
      <ScrollToTop key={checkedAfter ?? "" + checkedBefore ?? ""} />
    </>
  )
}

export default CommunityPage
