import staticUrl from "@/src/tools/staticUrl";

export default {
  methods: {
    generateFilePath(path) {
      return staticUrl.generateFilePath(path);
    }
  }
}
