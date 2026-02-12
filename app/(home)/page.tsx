import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
	return (
		<main className="flex-1">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-black">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent pointer-events-none" />
				<div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />

				{/* Floating Code Screenshot - Bottom Right */}
				<div className="absolute right-12 bottom-0 translate-y-1/3 w-[40%] max-w-lg hidden lg:block opacity-60 dark:opacity-40 pointer-events-none z-20">
					<div className="relative">
						<div className="absolute inset-0 bg-green-500/10 blur-3xl"></div>
						<Image
							src="/entity_code.png"
							alt="Simple entity code example"
							width={800}
							height={600}
							className="w-full h-auto relative z-10"
						/>
					</div>
				</div>

				<div className="container mx-auto px-6 py-32 relative z-10">
					<div className="max-w-4xl">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-medium text-green-600 dark:text-green-400 mb-8">
							<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
							Open Source · Apache 2.0
						</div>

						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
							Connect Every System.<br />
							<span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
								Accelerate Every Mission.
							</span>
						</h1>

						<p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
							API-first coordination for sensors, assets, and mission systems.
							Integrate Once. Deploy Everywhere—no vendor lock-in,
							no point-to-point complexity.
						</p>

						<div className="flex flex-wrap gap-4">
							<Link
								href="/docs"
								className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-400 text-black rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
							>
								Get Started
								<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M5 12h14M12 5l7 7-7 7"/>
								</svg>
							</Link>
							<a
								href="https://github.com/projectqai/hydris"
								className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 text-black dark:text-white rounded-lg font-semibold transition-all duration-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								View on GitHub
							</a>
						</div>
					</div>
				</div>

			</section>

			{/* Stats Bar */}
			<section className="border-y border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-zinc-950">
				<div className="container mx-auto px-6 py-16">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl font-bold text-green-500 mb-2 font-mono">gRPC</div>
							<div className="text-sm text-gray-600 dark:text-gray-400">Native Protocol</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-green-500 mb-2 font-mono">P2P</div>
							<div className="text-sm text-gray-600 dark:text-gray-400">Mesh Architecture</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-green-500 mb-2 font-mono">100%</div>
							<div className="text-sm text-gray-600 dark:text-gray-400">API Coverage</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-green-500 mb-2 font-mono">Apache 2.0</div>
							<div className="text-sm text-gray-600 dark:text-gray-400">Forever Open</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-24 bg-gray-50 dark:bg-black">
				<div className="container mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="text-sm font-mono text-green-500 uppercase tracking-wider mb-4">Core Capabilities</div>
						<h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
							Built for Real-World Coordination
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">
							From sensor networks to field operations, Hydris handles the complexity
							of multi-system integration so you can focus on the mission.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50 hover:border-green-500/50 transition-all duration-300">
							<h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Track Management at the Edge</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								Correlate tracks from multiple sensors with automated track correlation
								and real-time entity state management
							</p>
						</div>

						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50 hover:border-green-500/50 transition-all duration-300">
							<h3 className="text-xl font-semibold mb-3 text-black dark:text-white">DDIL-Native</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								Peer-to-peer mesh keeps operating when networks go down. Designed for disconnected,
								denied, intermittent, or limited connectivity environments.
							</p>
						</div>

						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50 hover:border-green-500/50 transition-all duration-300">
							<h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Standards-Based</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								gRPC, CoT, SAPIENT - standards-based out of the box. Integrate Once. Deploy Everywhere.
							</p>
						</div>

						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50 hover:border-green-500/50 transition-all duration-300">
							<h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Vendor Neutral</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								Bring your own sensors, your own command systems, your own displays. Hydris adapts to your stack—not the other way around.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-24 border-y border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-zinc-950">
				<div className="container mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="text-sm font-mono text-green-500 uppercase tracking-wider mb-4">Architecture</div>
						<h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
							How It Works
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">
							Integrations are built with the Hydris SDK, run on each node,
							and translate between external systems and Hydris's entity model.
						</p>
					</div>

					<div className="max-w-6xl mx-auto mb-16">
						<div className="bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-800 rounded-2xl p-12">
							<div className="flex flex-col md:flex-row items-center justify-center gap-8">
								<div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center min-w-[180px]">
									<h4 className="font-semibold text-black dark:text-white mb-2">Your Systems</h4>
									<p className="text-sm text-gray-600 dark:text-gray-400">Sensors, assets, platforms</p>
								</div>

								<div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-gray-300 via-green-500 to-gray-300 dark:from-gray-700 dark:via-green-500 dark:to-gray-700 relative">
									<div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-green-500 border-y-[6px] border-y-transparent"></div>
								</div>

								<div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center min-w-[180px]">
									<h4 className="font-semibold text-black dark:text-white mb-2">Hydris Node</h4>
									<p className="text-sm text-gray-600 dark:text-gray-400">SDK + Entity Model</p>
								</div>

								<div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-gray-300 via-green-500 to-gray-300 dark:from-gray-700 dark:via-green-500 dark:to-gray-700 relative">
									<div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-green-500 border-y-[6px] border-y-transparent"></div>
								</div>

								<div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center min-w-[180px]">
									<h4 className="font-semibold text-black dark:text-white mb-2">Mission Systems</h4>
									<p className="text-sm text-gray-600 dark:text-gray-400">C2, displays, analysis</p>
								</div>
							</div>

							<div className="mt-12 pt-12 border-t border-gray-300 dark:border-gray-700 text-center">
								<p className="text-gray-600 dark:text-gray-400">
									One connector unlocks the entire network. Skip lengthy point-to-point integration cycles.{' '}
									<br className="hidden sm:block" />
									Hydris Node is open source under <code className="font-mono text-sm bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded text-green-600 dark:text-green-400">Apache 2.0</code>—forever, no vendor lock-in.
								</p>
							</div>
						</div>
					</div>

				</div>
			</section>

			{/* Use Cases */}
			<section className="py-24 bg-gray-50 dark:bg-black">
				<div className="container mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="text-sm font-mono text-green-500 uppercase tracking-wider mb-4">Use Cases</div>
						<h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
							Built for Every Team
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">
							Whether you're building sensors, running operations, or managing mission systems.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50">
							<h3 className="text-lg font-semibold mb-3 text-black dark:text-white flex items-center gap-3">
								<span className="w-2 h-2 bg-green-500 rounded-sm"></span>
								Sensor & System Vendors
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								Integrate once, reach every Hydris deployment. You bring the capability—we co-build interoperability from your system to the mission.
							</p>
						</div>

						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50">
							<h3 className="text-lg font-semibold mb-3 text-black dark:text-white flex items-center gap-3">
								<span className="w-2 h-2 bg-green-500 rounded-sm"></span>
								Mission System Operators
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								Rapidly access a growing ecosystem of capabilities. Vendor-neutral track aggregation at the edge, feeding your existing C2 and displays.
							</p>
						</div>

						<div className="p-8 rounded-lg border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50">
							<h3 className="text-lg font-semibold mb-3 text-black dark:text-white flex items-center gap-3">
								<span className="w-2 h-2 bg-green-500 rounded-sm"></span>
								Field Teams
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								Go from new asset arriving to operational use faster. Dynamically choose capabilities for your mission. Use your existing tools or Hydris View.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-gray-100 dark:bg-zinc-950">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto">
						<div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 border border-gray-300 dark:border-gray-700 rounded-3xl p-16 overflow-hidden">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

							<div className="text-center relative z-10">
								<h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
									Ready to Connect Your Network?
								</h2>
								<p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
									Download Hydris and start coordinating your systems in minutes.
								</p>

								<div className="flex flex-wrap gap-4 justify-center mb-10">
									<Link
										href="/docs"
										className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-400 text-black rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-green-500/30"
									>
										Read the Documentation
										<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M5 12h14M12 5l7 7-7 7"/>
										</svg>
									</Link>
									<a
										href="https://github.com/projectqai/hydris"
										className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:border-gray-400 dark:hover:border-gray-600 text-black dark:text-white rounded-lg font-semibold transition-all duration-200"
										target="_blank"
										rel="noopener noreferrer"
									>
										Clone from GitHub
									</a>
								</div>

								<div className="flex flex-wrap gap-8 justify-center text-sm font-mono text-gray-500 dark:text-gray-400">
									<a href="https://projectqai.github.io" className="hover:text-green-500 transition-colors">
										projectqai.github.io
									</a>
									<a href="https://github.com/projectqai/hydris" className="hover:text-green-500 transition-colors">
										github.com/projectqai/hydris
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
