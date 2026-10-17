import { BookOpen, Camera, Compass, Navigation, Flame, Images, Landmark, Mic, Mountain, ScrollText, Users, type LucideProps } from "lucide-react"

const ICONS = {
  pathfinder: Compass,
  steward: Landmark,
  catalyst: Flame,
  reader: BookOpen,
  listener: Mic,
  convener: Users,
  connector: Mountain,
  navigator: Navigation,
  witness: Camera,
  storykeeper: ScrollText,
  curator: Images,
}

type Props = LucideProps & {
  id: string
}

export default function MilestoneIcon({ id, ...props }: Props) {
  const Icon = ICONS[id as keyof typeof ICONS] ?? Compass
  return <Icon aria-hidden="true" strokeWidth={1.5} {...props} />
}
