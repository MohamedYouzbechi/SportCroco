import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-edit-match",
  templateUrl: "./edit-match.component.html",
  styleUrls: ["./edit-match.component.css"],
})
export class EditMatchComponent implements OnInit {
  id: any;
  match: any;
  constructor(
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatcheById(this.id).subscribe((data) => {
      this.match = data.findedMatch;
    });
  }

  editMatch() {
    console.log("match object", this.match);
    this.matchService.editMatch(this.match).subscribe((data) => {
      console.log("Edit with success", data.message);
      this.router.navigate(["admin"]);
    });
  }
}
