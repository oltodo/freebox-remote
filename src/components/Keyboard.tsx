import {
  ArrowUturnLeftIcon,
  BackwardIcon,
  Bars3Icon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ForwardIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlayPauseIcon,
  PlusIcon,
  PowerIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline'
import { FreeLogo } from './FreeLogo'
import { InformationIcon } from './icons/InformationIcon'

export function Keyboard() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-between gap-8">
        <button className="btn btn-square btn-ghost btn-xl" type="button">
          <span className="text-base font-normal">AV</span>
        </button>
        <div />
        <button className="btn btn-square btn-ghost btn-xl" type="button">
          <PowerIcon className="h-6" />
        </button>
      </div>

      <div className="carousel rounded-box w-full my-4">
        <div className="carousel-item w-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1">
            <button className="btn btn-square btn-xl" type="button">1</button>
            <button className="btn btn-square btn-xl" type="button">2</button>
            <button className="btn btn-square btn-xl" type="button">3</button>
            <button className="btn btn-square btn-xl" type="button">4</button>
            <button className="btn btn-square btn-xl" type="button">5</button>
            <button className="btn btn-square btn-xl" type="button">6</button>
            <button className="btn btn-square btn-xl" type="button">7</button>
            <button className="btn btn-square btn-xl" type="button">8</button>
            <button className="btn btn-square btn-xl" type="button">9</button>
            <button className="btn btn-ghost btn-square btn-xl" type="button">
              <SpeakerXMarkIcon className="h-6" />
            </button>
            <button className="btn btn-square btn-xl" type="button">0</button>
            <button className="btn btn-ghost btn-square btn-xl" type="button">
              <span className="size-4 bg-error rounded-full" />
            </button>
          </div>
        </div>
        <div className="carousel-item w-full flex items-center justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <button className="btn btn-square btn-xl" type="button">
                  <PlusIcon className="h-6" />
                </button>
                <div className="text-sm">VOL</div>
                <button className="btn btn-square btn-xl" type="button">
                  <MinusIcon className="h-6" />
                </button>
              </div>
              <div className="flex gap-2 flex-col">
                <button className="btn btn-ghost btn-square btn-xl" type="button">
                  <SpeakerXMarkIcon className="h-6" />
                </button>
                <button className="btn btn-ghost btn-square btn-xl" type="button">
                  <span className="size-4 bg-error rounded-full" />
                </button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="btn btn-square btn-xl" type="button">
                  <PlusIcon className="h-6" />
                </button>
                <div className="text-sm">PROG</div>
                <button className="btn btn-square btn-xl" type="button">
                  <MinusIcon className="h-6" />
                </button>
              </div>
            </div>

            <div className="flex gap-1">
              <button className="btn btn-square btn-ghost btn-xl" type="button">
                <BackwardIcon className="h-6" />
              </button>
              <button className="btn btn-square btn-ghost btn-xl" type="button">
                <PlayPauseIcon className="h-6" />
              </button>
              <button className="btn btn-square btn-ghost btn-xl" type="button">
                <ForwardIcon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 shrink grow-0">
        <div className="flex items-center justify-center">
          <button className="btn btn-circle btn-error btn-outline" type="button">
            <ArrowUturnLeftIcon className="h-5" />
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-xl" type="button">
            <ChevronUpIcon className="h-6" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-circle btn-info btn-outline" type="button">
            <MagnifyingGlassIcon className="h-5" />
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-xl" type="button">
            <ChevronLeftIcon className="h-6" />
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-xl" type="button">
            <span className="text-base font-normal">OK</span>
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-xl" type="button">
            <ChevronRightIcon className="h-6" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-circle btn-success btn-outline" type="button">
            <Bars3Icon className="h-5" />
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-xl" type="button">
            <ChevronDownIcon className="h-6" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-circle btn-warning btn-outline" type="button">
            <InformationIcon className="h-5" />
          </button>
        </div>
      </div>

      <button className="btn w-full btn-ghost btn-xl mt-4" type="button">
        <FreeLogo className="h-10 text-error" />
      </button>

    </div>
  )
}
