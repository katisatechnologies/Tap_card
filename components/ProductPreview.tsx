const featureGroups = [
  {
    title: 'Activation and profile setup',
    points: [
      'Activate card with Card ID and Activation Password',
      'Create your public username URL for easy sharing',
      'Legacy activation handling for older cards'
    ]
  },
  {
    title: 'Public digital identity',
    points: [
      'One-tap profile with photo, title, company, bio and location',
      'Actions: Save Contact, Call, Email, WhatsApp',
      'Social links, custom links, website, optional premium visibility controls'
    ]
  },
  {
    title: 'Lead conversion engine',
    points: [
      'Visitor lead capture from your profile page',
      'Dashboard pipeline with NEW, CONTACTED, INTERESTED, WON, LOST',
      'Priority tags, timeline notes, and AI follow-up suggestions (Coming Soon)'
    ]
  },
  {
    title: 'Customization and premium layer',
    points: [
      'Theme, accent, fonts, layout, and CTA-focused styling',
      'Optional 4-digit profile privacy lock',
      'Executive profile upgrades, trust markers, and scheduler-ready layout'
    ]
  },
  {
    title: 'Analytics and exports',
    points: [
      'Track total and monthly profile views',
      'See top referrers and recent visit activity',
      'Export leads to CSV with status and follow-up metadata'
    ]
  },
  {
    title: 'Security and account control',
    points: [
      'Secure sign-in and session controls',
      'Role-based access for user and admin flows',
      'Rate-limited password reset and token recovery'
    ]
  }
]

export default function ProductPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#0B0F1A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Built as a complete digital identity platform</h2>
          <p className="text-xl text-gray-300">IDORA starts with one-tap sharing, then scales into lead capture, follow-up, analytics, and conversion workflows.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featureGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm hover:border-cyan-300/40 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-200">
                    <span className="w-2 h-2 mt-2 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
